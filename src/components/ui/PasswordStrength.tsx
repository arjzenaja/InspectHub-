type PasswordStrengthProps = {
  password: string;
};

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const getStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const strength = getStrength(password);
  const config = [
    { label: "Sangat Lemah", color: "bg-red-500", width: "w-1/5" },
    { label: "Lemah", color: "bg-orange-500", width: "w-2/5" },
    { label: "Sedang", color: "bg-yellow-500", width: "w-3/5" },
    { label: "Kuat", color: "bg-blue-500", width: "w-4/5" },
    { label: "Sangat Kuat", color: "bg-green-500", width: "w-full" },
  ][strength - 1] ?? { label: "", color: "bg-transparent", width: "w-0" };

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="h-1.5 w-full bg-[#F3F4F6] rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-300 ${config.color} ${config.width}`} />
      </div>
      <p className="text-xs mt-1 font-medium text-[#374151]">{config.label}</p>
    </div>
  );
};

export default PasswordStrength;
