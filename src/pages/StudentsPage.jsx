
import StudentTable from '../components/StudentsTable';

export default function StudentsPage({ students = [], onDelete }) {

  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">RECORDS</p>
          <h1>Students</h1>

          <p className="intro">
            There {students.length === 1 ? 'is' : 'are'} {students.length}{' '}
            student{students.length === 1 ? '' : 's'}.
          </p>
        </div>

        <a className="button" href="/add-student">
          Add student
        </a>
      </div>

      <StudentTable
        students={students}
        onDelete={onDelete}
      />
    </main>
  );
}
