import { useRouter } from "next/router";

export default function Thankyou() {
  const router = useRouter();
  const handleSubmit = () => {
 router.push("/")
  ;
  };
  return (
    <div className="thanks">
      <h2 className="thankyou">Thanks for the message!</h2>
      <p className="res">I'll get back to you as soon as possible</p>
      <button onClick={handleSubmit} className="home">
        BACK TO PORTFOLIO
      </button>
    </div>
  );
}
