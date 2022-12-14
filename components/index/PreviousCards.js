import { useRouter } from "next/router";
import { AiFillEdit } from "react-icons";
import { BsFillTrashFill } from "react-icons/bs";

const PreviousCards = ({ titleSets, setTitleSets, setCurrTitle }) => {
  const router = useRouter();
  // select question from previous sets
  function goToQuestion(title) {
    setCurrTitle(title);
    router.push("/flashcard");
  }

  function delPrevQuestion(title, index) {
    localStorage.removeItem(title);
    setTitleSets(
      titleSets.filter((t, tIndex) => t !== title && tIndex !== index)
    );
  }
  return (
    <>
      <div className="w-full mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-bold mt-4 mb-2">Previous Flashcards</h1>
        {titleSets &&
          titleSets.map((title, index) => (
            <div
              className="flex items-center w-[70%] h-10 rounded pr-1 border-[1px] border-[#d4d4d4] mb-2 lg:w-[30vw]"
              key={Math.random() * 1000}>
              <div
                className="cursor-pointer flex items-center pl-4 rounded text-lg w-[90%] hover:text-[#954ca0] hover:font-bold transition-all duration-100"
                onClick={() => {
                  goToQuestion(title);
                }}>
                <p>{title}</p>
              </div>
              <button
                className="question-list-btn"
                type="button"
                onClick={() => {
                  delPrevQuestion(title, index);
                }}>
                <BsFillTrashFill />
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default PreviousCards;
