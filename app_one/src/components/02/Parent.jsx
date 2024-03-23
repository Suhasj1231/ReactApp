

const Parent = ({ children, styleToChild }) => {
  // Define default Tailwind classes for border
  const defaultClasses = 'border border-gray-300 rounded px-4 py-2 w-1/2 mx-auto';

  // Combine default and custom classes
  const combinedClasses = `${defaultClasses} ${styleToChild}`;

  return (
    <div className={combinedClasses}>
        <h3 className="text-center">style parent to child</h3>
      {children}
    </div>
  );
};

 export default Parent
