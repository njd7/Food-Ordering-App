const CartIcon = (props) => {
  const { isEmpty } = props;
  return (
    <div className="w-9 h-9 text-gray-700">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        className="w-full h-full"
        viewBox="0 0 24 24"
      >
        <path fill={!isEmpty ? "#73CC44" : "none"} d="M1 1h4l2.6 10.4a2 2 0 002 1.6h9.2a2 2 0 002-1.6L20 4H6"></path>
        <circle cx="10" cy="20" r="2"></circle>
        <circle cx="16" cy="20" r="2"></circle>
      </svg>
    </div>
  );
};

export default CartIcon;
