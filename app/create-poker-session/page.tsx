import { redirect } from "next/navigation";
import Modal from "@/components/Modal";
import PokerSessionForm from "@/components/PokerSessionForm";
import { getCurrentUser } from "@/lib/session";

const CreatePokerSession = async () => {
  const session = await getCurrentUser();
  if (!session?.user) redirect("/");
  return (
    <Modal>
      <>
        <h3 className="modal-head-text">Create New Poker Session</h3>
        <PokerSessionForm type="create" session={session} />
      </>
    </Modal>
  );
};

export default CreatePokerSession;
