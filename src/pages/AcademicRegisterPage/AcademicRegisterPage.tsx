import PersonRegisterForm from "../../components/StudentRegisterForm/StudentRegistryForm.tsx"
import { PageTitle } from "@/components/PageTitle/PageTitle.tsx";

const AcademicRegisterPage: React.FC = () => 
{
    return (
        
        <div className="pageContainer">
            <div className="pageContent">
                <PageTitle showShield={false} title="Cadastro de Aluno" />
                <PersonRegisterForm />
            </div>
        </div>
    )
}
export default AcademicRegisterPage; 