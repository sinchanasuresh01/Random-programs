
import { useState, useEffect } from 'react';
import Button from './button';

const emptyStudent = {
  name: '',
  email: '',
  course: '',
  year: '1st Year'
};

export default function StudentsForm({ student, onSave }) {

  const [formData, setFormData] = useState(student || emptyStudent);

  useEffect(() => {
    setFormData(student || emptyStudent);
  }, [student]);
function handleChange(event) {
    const { name, value } = event.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (onSave) {
      onSave(formData);
    }
  }

  return (
    <div className="form-container">

      <h2>{student ? 'Edit Student' : 'Add New Student'}</h2>

      <form className="student-form" onSubmit={handleSubmit}>

        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Asha Kumar"
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="asha@example.com"
            required
          />
        </label>

        <label>
          Course
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="e.g. MCA"
            required
          />
        </label>

        <label>
          Year
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
          </select>
        </label>

        <div className="form-actions">

          <a
            className="button secondary-button"
            href="/students"
          >
            Cancel
          </a>

          <Button type="submit">
            {student ? 'Update Student' : 'Save Student'}
          </Button>

        </div>

      </form>
    </div>
  );
}
