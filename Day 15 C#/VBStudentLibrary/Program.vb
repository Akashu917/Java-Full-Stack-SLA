Public Class Student

    Public Property Id As Integer
    Public Property Name As String
    Public Property Course As String

    Public Sub New(id As Integer, name As String, course As String)
        Me.Id = id
        Me.Name = name
        Me.Course = course
    End Sub

    Public Function GetStudentDetails() As String

        Return "ID: " & Id &
               ", Name: " & Name &
               ", Course: " & Course

    End Function

    Public Function Add(a As Integer, b As Integer) As Integer

        Return a + b

    End Function

End Class