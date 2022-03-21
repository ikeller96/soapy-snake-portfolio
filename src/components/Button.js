import "../App.css";

function Button({ text, url, disabled }) {
  return (
      <button
        onClick={() => window.open(url)}
        className="button"
        target="_blank"
        rel="noopener noreferrer"
        disabled={disabled}
      >
        {text}
      </button>
  );
}

export default Button;
