using System;
using VBStudentLibrary;

class Program
{
    static void Main(string[] args)
    {
        Student student = new Student(
            101,
            "Akash",
            "Computer Science"
        );

        Console.WriteLine(student.GetStudentDetails());

        int result = student.Add(10, 20);

        Console.WriteLine("Addition = " + result);

        Console.ReadLine();
    }
}
