import "./Input.css";

function Input({ label, placeholder }) {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input className="input-box" placeholder={placeholder} />
    </div>
  );
}

export default Input;
