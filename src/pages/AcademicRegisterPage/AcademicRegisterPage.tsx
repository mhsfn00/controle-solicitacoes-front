import PersonRegisterForm from "../../components/StudentRegisterForm/StudentRegistryForm.tsx"
import { PageTitle } from "@/components/PageTitle/PageTitle.tsx";

const AcademicRegisterPage: React.FC = () => 
{
    return (
      <div className="w-full max-w-3xl mx-auto">
        <PageTitle showShield={false} title="Cadastro de Aluno" />
        <PersonRegisterForm />
      </div>
    );
}
export default AcademicRegisterPage; 