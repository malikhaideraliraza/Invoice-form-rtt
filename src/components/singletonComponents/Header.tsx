import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
  onReset: () => void;
  saveBtnLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, onReset, saveBtnLoading }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="space-x-2">
        <button
          type="button"
          className="btn btn-secondary !bg-white !text-black border border-gray-300 !rounded-lg"
          onClick={onReset}
        >
          Reset
        </button>

        <button
          disabled={saveBtnLoading}
          type="submit"
          className={`btn btn-primary !bg-[#7F56D9] !text-white !rounded-lg ${saveBtnLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Header;
