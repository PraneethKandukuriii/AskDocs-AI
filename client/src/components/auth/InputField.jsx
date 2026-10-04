import { Mail, Lock, User } from "lucide-react";

const icons = {
  name: User,
  email: Mail,
  password: Lock,
  confirmPassword: Lock,
};

const InputField = ({
  name,
  type,
  placeholder,
  register,
  rules,
  error,
}) => {
  const Icon = icons[name];

  return (
    <div className="relative">
      {Icon && (
        <Icon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className="
          h-14
          w-full
          rounded-2xl
          border border-white/[0.10]
          bg-white/[0.045]
          pl-12
          pr-4
          text-sm text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-200
          hover:border-white/[0.18] hover:bg-white/[0.06]
          focus:border-violet-400/80 focus:bg-white/[0.07]
          focus:ring-4 focus:ring-violet-500/15
        "
      />
      {error && <p className="mt-2 text-xs text-red-400">{error.message}</p>}
    </div>
  );
};

export default InputField;
