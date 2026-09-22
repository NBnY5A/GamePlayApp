import { useRouter } from "expo-router";
import { useEffect } from "react";
import Splash from "../screens/Splash";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return <Splash />;
}
