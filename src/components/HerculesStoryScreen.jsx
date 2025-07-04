import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ScreenHeader from "../components/ScreenHeader";
import BottomNav from "../components/BottomNav";
import StepIndicator from "../components/StepIndicator";
import AiButton from "../components/AiButton";
import styles from "./HerculesStoryScreen.module.css";
import AiChat from "../components/AiChat";
import {
  IoIosPlayCircle,
  IoIosPause,
  IoIosRefresh,
  IoIosRepeat,
} from "react-icons/io";

/* ─────────────────────────  STORY TEXTS  ───────────────────────── */

const summaryText = `Long ago, in a time when gods and mortals crossed paths, Hercules was born—the son of Zeus, king of the gods, and a mortal woman named Alcmene. Even as a baby, Hercules showed signs of his divine strength: when Hera, jealous and vengeful, sent two snakes to his cradle, he strangled them with his bare hands.

He grew up strong, brave, and kind-hearted. But Hera never stopped tormenting him. One day, driven mad by her rage, Hercules did something terrible—he harmed his own family without realizing it. Full of grief, he went to the Oracle of Delphi to seek redemption. The Oracle told him he must serve King Eurystheus for twelve years and complete twelve nearly impossible labors. Only then would he find peace.

And so began his legendary trials:

He faced the Nemean Lion, whose skin no weapon could pierce. Hercules strangled it and wore its pelt as armor.

He slayed the Lernaean Hydra, a serpent with many heads that grew back double when cut. With help from his nephew Iolaus, he burned each stump to stop them from regrowing.

He captured the Ceryneian Hind, a sacred deer of Artemis, swift and untouchable.

He brought back the Erymanthian Boar, a wild beast that terrorized the land.

He cleaned the Augean Stables—filthy and vast—in a single day by rerouting two rivers through them.

He defeated the Stymphalian Birds, monstrous creatures with bronze beaks and sharp feathers, by startling them into the air and shooting them down.

He captured the Cretan Bull, a fire-breathing beast gifted to King Minos.

He stole the Mares of Diomedes, man-eating horses kept by a savage king.

He took the belt of Hippolyta, queen of the Amazons, after a battle that nearly turned peaceful intentions into war.

He herded the Cattle of Geryon, a giant with three bodies who lived far to the west.

He fetched the golden apples of the Hesperides, guarded by a serpent and retrieved with help from the titan Atlas.

Finally, he descended into the Underworld and brought back Cerberus, the three-headed guard dog of Hades.

After the labors, Hercules continued to journey far and wide. He rescued kings, defeated monsters, and even challenged Death itself to save a friend’s wife. But his story ended in tragedy. Tricked into wearing a poisoned robe, he suffered unbearable pain. Choosing to end it on his own terms, he built a funeral pyre and lay atop it. As the flames rose, a thundercloud descended—Zeus lifted him to Olympus.

There, Hercules found peace at last. He married Hebe, the goddess of youth, and was welcomed among the gods as one of their own.`;

const fullChapterText = `Hercules was born from the imagination of ancient people during a time when they lived in fear of wild animals, storms, and earthquakes. They needed heroes to help them overcome life's hardships. Hercules, the son of Zeus and a mortal princess Alcmene, was the greatest hero of Greek mythology. He was the strongest of men, slaying beasts and tyrants, and always helping people with courage and justice.

Alcmene gave birth to two sons in Thebes: Hercules, son of Zeus, and Iphicles. Hera, jealous of Alcmene, hated Hercules. Zeus sent Hermes to bring the infant to Olympus to drink Hera's milk while she slept, making him invincible. When Hera woke and realized it, she pushed him away, spilling milk into the sky, creating the Milky Way. When the babies were eight months old, Hera sent two snakes to kill them. Hercules strangled them with his bare hands, proving his divine nature.

Hercules later married Megara, daughter of the king of Thebes. But Hera made him lose his mind, and he harmed his own family. After regaining his senses, he went to the oracle at Delphi for guidance. The Pythia told him to serve his cousin Eurystheus in Mycenae for twelve years. If he succeeded, he would become immortal.

Hercules’ first labor was to slay the Nemean Lion, whose skin was impervious to weapons. He crafted a club from a wild olive tree and strangled the lion with his hands. He wore its skin as armor. Eurystheus was so terrified he hid in a bronze jar.

Next came the Lernaean Hydra, a multi-headed serpent. With help from his nephew Iolaus, Hercules burned each stump after cutting off a head to prevent it from growing back. He buried the immortal head under a rock and dipped his arrows in the Hydra’s venom.

For another labor, Hercules captured the Erymanthian Boar alive and brought it back to Mycenae, frightening Eurystheus again. He also chased the golden-horned deer of Artemis for a year, finally wounding and capturing it gently.

At Lake Stymphalia, he drove out man-eating birds using bronze castanets from Athena, then shot many with his arrows. For the Augean Stables, filled with filth, Hercules redirected two rivers through them, cleaning them in a single day.

Angered by Augeas’ refusal to pay him, Hercules defeated and killed him, founding the Olympic Games in honor of Zeus. Athletes from across Greece participated, and wars paused during the games.

Hercules also captured the Cretan Bull, subdued the man-eating horses of Diomedes, and obtained the belt of the Amazon queen Hippolyta. He journeyed far west to retrieve Geryon's cattle, killing the two-headed guard dog Orthrus and Geryon himself. To reach Geryon's land, he borrowed the Sun's golden cup.

In another story, Hercules saved Alcestis, wife of his friend Admetus, from death by wrestling with Charon at the entrance to Hades.

For a labor, Hercules descended to the Underworld and brought back Cerberus, the three-headed guard dog. Later, he sought the golden apples of the Hesperides. Prometheus, whom Hercules freed, advised him to ask Atlas for help. While Atlas fetched the apples, Hercules held up the sky, then tricked Atlas into taking it back.

In Egypt, Hercules escaped human sacrifice by killing the tyrant Busiris.

After completing all his labors, Hercules married Deianira. When the centaur Nessus tried to abduct her, Hercules shot him with a poisoned arrow. Before dying, Nessus told Deianira that his blood would ensure Hercules’ love forever. Later, she gave Hercules a poisoned tunic soaked in Nessus’ blood. Upon wearing it, Hercules was consumed by pain. He climbed Mount Oeta, built a pyre, and laid on it. Only Philoctetes agreed to light the fire, and Hercules gifted him his poisoned arrows.

A thunderstorm carried Hercules to Olympus. There, reconciled with Hera, he married Hebe, daughter of Zeus and Hera, and became a god, forever young.

Hercules' name means "glory through Hera's hate." Loved for his heroic deeds, he was worshipped across the Mediterranean. Many cities were named after him, and coins bore his image—even Alexander the Great claimed descent from him. His life inspired plays, art, and films, keeping his legend alive to this day.`;

/* ─────────────────────────  COMPONENT  ───────────────────────── */

const HerculesStoryScreen = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("summary");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const isPlayingRef = useRef(isPlaying);
  const indexRef = useRef(currentSentenceIndex);
  const utterRef = useRef(null);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    indexRef.current = currentSentenceIndex;
  }, [currentSentenceIndex]);

  const sentences = (
    activeTab === "summary" ? summaryText : fullChapterText
  ).split(/(?<=[.?!])\s+/);

  const speakFrom = (startIndex) => {
    if (startIndex >= sentences.length) {
      setIsPlaying(false);
      return;
    }

    const utter = new SpeechSynthesisUtterance(sentences[startIndex]);
    utter.lang = "en-US";

    utter.onend = () => {
      if (!isPlayingRef.current) return;
      const next = startIndex + 1;
      setCurrentSentenceIndex(next);
      speakFrom(next);
    };

    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => {
      if (!prev) {
        window.speechSynthesis.cancel();
        speakFrom(currentSentenceIndex);
      } else {
        window.speechSynthesis.cancel();
      }
      return !prev;
    });
  };

  const handleRestart = () => {
    window.speechSynthesis.cancel();
    setCurrentSentenceIndex(0);
    setIsPlaying(true);
    speakFrom(0);
  };

  const handleRepeat = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
      speakFrom(currentSentenceIndex);
    }, 100);
  };

  const switchTab = (tab) => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setActiveTab(tab);
    setCurrentSentenceIndex(0);
  };

  return (
    <div className={styles.container}>
      <ScreenHeader title="Hercules" />
      <p className={styles.description}>Listen & read the story of Hercules!</p>

      <div className={styles.card}>
        <div className={styles.tabHeader}>
          <button
            className={activeTab === "summary" ? styles.activeTab : styles.tab}
            onClick={() => switchTab("summary")}
          >
            Summary
          </button>
          <button
            className={activeTab === "full" ? styles.activeTab : styles.tab}
            onClick={() => switchTab("full")}
          >
            Full chapter
          </button>
        </div>

        <div className={styles.storyBox}>
          <p
            className={styles.storyText}
            aria-live="polite"
            aria-atomic="true"
          >
            {sentences[currentSentenceIndex]}
          </p>

          <div className={styles.controls}>
            <button className={styles.iconButton} onClick={handleRestart}>
              <IoIosRefresh size={28} />
            </button>

            <button className={styles.iconButton} onClick={handleTogglePlay}>
              {isPlaying ? (
                <IoIosPause size={40} />
              ) : (
                <IoIosPlayCircle size={40} />
              )}
            </button>

            <button className={styles.iconButton} onClick={handleRepeat}>
              <IoIosRepeat size={28} />
            </button>
          </div>
        </div>

        <StepIndicator current={1} />
      </div>

      <div className={styles.arrowWrapper}>
        <button
          className={styles.arrowButton}
          onClick={() => navigate("/courses/history/hercules/video")}
        >
          <span className={`${styles.arrow} ${styles.leftArrow}`}>➜</span>
        </button>
        <button
          className={styles.arrowButton}
          onClick={() => navigate("/courses/history/hercules/quiz")}
        >
          <span className={styles.arrow}>➜</span>
        </button>
      </div>

      <AiButton onClick={() => setIsChatOpen(true)} />
      {isChatOpen && <AiChat onClose={() => setIsChatOpen(false)} />}

      <BottomNav />
    </div>
  );
};

export default HerculesStoryScreen;
