export default function NotifyForm() {
    return (
      <form
        action="https://formspree.io/f/xpwovgbb"
        method="POST"
        className="mt-8 flex w-full max-w-md items-center justify-center gap-2"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="
            w-full
            rounded-full
            border border-white/15
            bg-white
            px-4
            py-2
            text-sm
            text-black
            placeholder-black/50
            focus:outline-none
          "
        />
  
        <button
          type="submit"
          className="
            rounded-full
            bg-[#F9BB00]
            px-5
            py-2
            text-sm
            font-medium
            text-black
            hover:brightness-110
            active:scale-[.98]
            transition
            whitespace-nowrap
          "
        >
          Notify me
        </button>
      </form>
    );
  }
  