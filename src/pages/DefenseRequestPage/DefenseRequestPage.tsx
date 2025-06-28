import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";
import FormTemplate from "../../components/FormTemplate/FormTemplate"

const DefenseRequestPage: React.FC = () => 
{
    return (
        <div className="pageContainer">
            <div className="pageContent">
                <ProgressStepper/>
                <FormTemplate/>
            </div>
        </div>
    )
}
export default DefenseRequestPage; 