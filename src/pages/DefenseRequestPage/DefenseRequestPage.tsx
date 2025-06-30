import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";
import DefenseRequestForm from "../../components/DefenseRequestForm/DefenseRequestForm"

const DefenseRequestPage: React.FC = () => 
{
    return (
        <div className="pageContainer">
            <div className="pageContent">
                <ProgressStepper/>
                <DefenseRequestForm/>
            </div>
        </div>
    )
}
export default DefenseRequestPage; 