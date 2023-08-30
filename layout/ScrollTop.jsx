import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdUpgrade } from "react-icons/md";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Sayfa kaydırıldığında handleScroll fonksiyonunu dinleyin
    window.addEventListener("scroll", handleScroll);

    // Sayfa değiştikçe, bileşen unmount edildiğinde event listener'ı kaldırın
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.asPath]); // router.asPath, sayfa değiştikçe bileşeni yeniden oluşturur

  return (
    <div
      className={`${
        isVisible ? "" : "hidden"
      } fixed bottom-5 right-5 bg-[#67c4fab4] rounded-full w-16 h-16  z-50`}
    >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-full h-full flex items-center justify-center"
        >
          <MdUpgrade size={32} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
