using EmployeeMVC_CRUD.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Mvc;


namespace EmployeeMVC_CRUD.Controllers
{
    public class EmployeeController : Controller
    {
        string cs = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;


        public ActionResult EmployeeDashborad()
        {
            List<Employee> employees = new List<Employee>();

            using (SqlConnection con = new SqlConnection(cs))
            {
                string query = "select * from Employee";

                SqlCommand cmd = new SqlCommand(query, con);

                con.Open();

                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    Employee emp = new Employee();

                    emp.Emp_Id = Convert.ToInt32(reader["Emp_Id"]);
                    emp.Emp_Name = reader["Emp_Name"].ToString();
                    emp.Department = reader["Department"].ToString();
                    emp.Salary = Convert.ToDecimal(reader["Salary"]);

                    employees.Add(emp);
                }
            }

            return View(employees);
        }

        public ActionResult Details(int id)
        {
            List<Employee> employees = new List<Employee>();
            using (SqlConnection con = new SqlConnection(cs))
            {
                string query = "select * from Employee";

                SqlCommand cmd = new SqlCommand(query, con);

                con.Open();

                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    Employee em = new Employee();

                    em.Emp_Id = Convert.ToInt32(reader["Emp_Id"]);
                    em.Emp_Name = reader["Emp_Name"].ToString();
                    em.Department = reader["Department"].ToString();
                    em.Salary = Convert.ToDecimal(reader["Salary"]);

                    employees.Add(em);
                }
            }
            Employee emp = employees.FirstOrDefault(x => x.Emp_Id == id);

            return View(emp);
        }

        public ActionResult Create()
        {
            return View();
        }

        
        [HttpPost]
        public ActionResult Create(Employee emp)
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                string query = @"insert into Employee (Emp_Name, Department, Salary) values (@Emp_Name, @Department, @Salary)";

                SqlCommand cmd = new SqlCommand(query, con);

                cmd.Parameters.AddWithValue("@Emp_Name", emp.Emp_Name);
                cmd.Parameters.AddWithValue("@Department", emp.Department);
                cmd.Parameters.AddWithValue("@Salary", emp.Salary);

                con.Open();
                cmd.ExecuteNonQuery();
            }

            return RedirectToAction("Index");
        }

        
        public ActionResult Edit(int id)
        {
            Employee emp = new Employee();

            using (SqlConnection con = new SqlConnection(cs))
            {
                string query = "select * from Employee where Emp_Id=@Emp_Id";

                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@Emp_Id", id);

                con.Open();

                SqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read())
                {
                    emp.Emp_Id = Convert.ToInt32(reader["Emp_Id"]);
                    emp.Emp_Name = reader["Emp_Name"].ToString();
                    emp.Department = reader["Department"].ToString();
                    emp.Salary = Convert.ToDecimal(reader["Salary"]);
                }
            }

            return View(emp);
        }

        
        [HttpPost]
        public ActionResult Edit(Employee emp)
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                string query = @"update Employee set Emp_Name=@Emp_Name,Department=@Department,Salary=@Salary where Emp_Id=@Emp_Id";

                SqlCommand cmd = new SqlCommand(query, con);

                cmd.Parameters.AddWithValue("@Emp_Id", emp.Emp_Id);
                cmd.Parameters.AddWithValue("@Emp_Name", emp.Emp_Name);
                cmd.Parameters.AddWithValue("@Department", emp.Department);
                cmd.Parameters.AddWithValue("@Salary", emp.Salary);

                con.Open();
                cmd.ExecuteNonQuery();
            }

            return RedirectToAction("Index");
        }

        
        public ActionResult Delete(int id)
        {
            using (SqlConnection con = new SqlConnection(cs))
            {
                string query = "delete from Employee where Emp_Id=@Emp_Id";

                SqlCommand cmd = new SqlCommand(query, con);

                cmd.Parameters.AddWithValue("@Emp_Id", id);

                con.Open();
                cmd.ExecuteNonQuery();
            }

            return RedirectToAction("Index");
        }
    }
}