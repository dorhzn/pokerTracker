import Modal from "@/components/Modal";
import PokerSessionForm from "@/components/PokerSessionForm";

const CreatePokerSession = () => {
  return (
    <Modal>
      <>
        <h3 className="modal-head-text">Create New Poker Session</h3>
        <PokerSessionForm />
      </>
    </Modal>
  );
};

export default CreatePokerSession;
