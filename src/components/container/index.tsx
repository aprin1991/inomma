export const Container = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-2xl w-full mx-auto shadow-md">
      {children}
    </div>
  );
};
