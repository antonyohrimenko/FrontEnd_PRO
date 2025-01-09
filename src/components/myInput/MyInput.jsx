import "./MyInput.css";

export default function MyInput({ name, type, placeholder, label }) {
  return (
    <div className="input-group">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
}
