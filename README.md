# Employee Attendance Management System

ASP.NET Core MVC (.NET 8) + Entity Framework Core (Code-First) + SQL Server.

## 1. Project structure

```
EmployeeAttendanceMVC/
├── Models/
│   ├── Employee.cs          Employee entity + validation attributes
│   └── Attendance.cs        Attendance entity + validation (incl. custom cross-field rule)
├── Data/
│   └── ApplicationDbContext.cs   EF Core DbContext, relationships, indexes, seed data
├── Controllers/
│   ├── EmployeesController.cs    CRUD for Employee
│   ├── AttendancesController.cs  CRUD for Attendance
│   └── HomeController.cs         Dashboard landing page
├── Views/
│   ├── Employees/  (Index, Create, Edit, Details, Delete)
│   ├── Attendances/ (Index, Create, Edit, Details, Delete)
│   ├── Home/ (Index, Error)
│   └── Shared/_Layout.cshtml (Bootstrap 5 nav + alerts)
├── Program.cs                Startup, DI, middleware pipeline
├── appsettings.json           Connection string
└── EmployeeAttendanceMVC.csproj
```

This follows the standard MVC scaffolding convention deliberately, since it's the
pattern most reviewers expect and makes the code easy to extend later.

## 2. How to run it

**Prerequisites:** .NET 8 SDK, SQL Server (LocalDB, Express, or full SQL Server).

```bash
cd EmployeeAttendanceMVC
dotnet restore

# Create the initial migration from the models
dotnet ef migrations add InitialCreate

# Apply it to the database (creates EmployeeAttendanceDB + tables + seed rows)
dotnet ef database update

# Run
dotnet run
```

Then browse to the URL shown in the console (e.g. `https://localhost:5001`).

If you don't have the EF CLI tool: `dotnet tool install --global dotnet-ef`.

**Using a full SQL Server instance instead of LocalDB:** edit the
`ConnectionStrings:DefaultConnection` value in `appsettings.json`, e.g.:
```
Server=YOUR_SERVER;Database=EmployeeAttendanceDB;User Id=sa;Password=YourPassword;TrustServerCertificate=True
```

## 3. Data model / relationships

- **Employee** (`EmployeeId` PK) → **Attendance** (`AttendanceId` PK, `EmployeeId` FK) is a
  **one-to-many** relationship, configured in `OnModelCreating`.
- `DeleteBehavior.Restrict` on the FK means the database itself refuses to cascade-delete
  attendance rows when an employee is removed — the controller additionally checks this
  up front so the user gets a friendly message instead of a SQL exception.
- Two unique indexes are defined: `Employee.Email` (no duplicate accounts) and
  `(Attendance.EmployeeId, Attendance.Date)` (one attendance record per employee per day).
- `HasData(...)` seeds three sample employees so the app isn't empty on first run.

## 4. Validation — where it lives and why

Validation is layered, which is worth calling out in the walkthrough:

1. **Data annotations on the models** (`[Required]`, `[EmailAddress]`, `[StringLength]`) —
   these drive both server-side `ModelState` validation and, via `jquery.validate.unobtrusive`,
   client-side validation in the browser for instant feedback.
2. **Custom cross-field validation** — `Attendance` implements `IValidatableObject` to enforce
   that `CheckOutTime` must be later than `CheckInTime` when supplied. This can't be expressed
   with a single-property attribute, so it's implemented as a `Validate()` method instead.
3. **Business-rule validation in the controllers** — things that need a database lookup
   (duplicate email, duplicate attendance for the same employee/day, blocking employee
   deletion while attendance history exists) are checked explicitly in the POST actions
   before `SaveChangesAsync()`, with errors added to `ModelState` so they render inline
   in the form exactly like annotation errors do.
4. **Database constraints** as the last line of defense (unique indexes, `NOT NULL`
   columns generated from the required properties) — in case anything reaches EF Core
   without going through the validated controller path.

## 5. Talking points for the walkthrough

- **Why Code-First / EF Core:** models are the single source of truth; migrations keep the
  schema under version control alongside the code, and `DbContext` abstracts raw ADO.NET/SQL.
- **Why `[Bind("...")]` on POST actions:** whitelists exactly which properties can be
  mass-assigned from the form, preventing over-posting attacks against fields like
  `EmployeeId` on create.
- **Why `[ValidateAntiForgeryToken]`:** every state-changing POST is protected against
  CSRF using ASP.NET Core's built-in anti-forgery tokens (`asp-action` forms emit them
  automatically via tag helpers).
- **Async all the way:** every controller action that touches the database uses
  `async`/`await` with `ToListAsync`/`FindAsync`/`SaveChangesAsync`, so requests don't
  block a thread while waiting on I/O.
- **Separation of concerns:** controllers only orchestrate; all persistence logic is
  behind `ApplicationDbContext`, and views contain no business logic beyond display
  formatting — easy to point to as clean layering.
- **Extensibility:** natural next steps to mention if asked — pagination on the Index
  views, role-based auth (Admin vs Employee) via ASP.NET Core Identity, a report/export
  (e.g. monthly attendance summary), and a REST API layer reusing the same DbContext.

## 6. Sample walkthrough flow to demo live

1. Show `Employee.cs` / `Attendance.cs` → explain annotations + the `IValidatableObject` rule.
2. Show `ApplicationDbContext.OnModelCreating` → relationships, indexes, seed data.
3. Run `dotnet ef migrations add InitialCreate` and open the generated migration file to
   show how the model maps to actual `CREATE TABLE` SQL.
4. `dotnet run` → walk through Employees CRUD, then Attendance CRUD, deliberately
   triggering a validation error (bad email, checkout before checkin, duplicate date)
   to show both client-side and server-side validation firing.
5. Try deleting an employee who has attendance records → show the friendly block message.
