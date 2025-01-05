import { useSprings, animated } from "@react-spring/web";

const AnimatedText = ({ text }) => {
  const letters = text.split("");

  // Generate springs for each character
  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      delay: i * 100, // Delay between characters
    }))
  );

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      {springs.map((style, index) => (
        <animated.span
          key={index}
          style={{
            ...style,
            display: "inline-block",
            fontWeight: "bold",
            marginRight: letters[index] === " " ? "0.2rem" : 0, // Adjust spacing for spaces
          }}
        >
          {letters[index]}
        </animated.span>
      ))}
    </div>
  );
};
export default AnimatedText;
