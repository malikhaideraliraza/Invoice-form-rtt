import React from "react";

interface FormActionsProps {
  onReset: () => void;
}

const FormActions: React.FC<FormActionsProps> = ({ onReset }) => (
  <div className="space-x-2">
    <button type="submit" className="btn btn-primary">
      Save
    </button>
    <button type="button" className="btn btn-secondary" onClick={onReset}>
      Reset
    </button>
  </div>
);

export default FormActions;
