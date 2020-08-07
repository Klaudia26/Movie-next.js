import { Modal } from "../modal/Modal";

interface Props {
  toggleDisc: () => void;
  handleButton: () => void;
  checkBox: boolean;
}

export const Disclaimer: React.FC<Props> = ({
  toggleDisc,
  handleButton,
  checkBox,
}) => {
  return (
    <div>
      <Modal visible>
        <div>
          <span>Welcome on Movie Website</span>
        </div>
        <div>
          <input
            type="checkbox"
            placeholder="Don't show me this again"
            onChange={toggleDisc}
            checked={checkBox}
          />
        </div>
        <button onClick={handleButton}>close</button>
      </Modal>
    </div>
  );
};
