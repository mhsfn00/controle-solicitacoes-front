import { PageTitle } from "@/components/PageTitle/PageTitle";
import { ProfessorRegistryForm } from "@/components/ProfessorRegistryForm/ProfessorRegistryForm";

const ProfessorRegistryPage: React.FC = () => {
   return (

        <div className="pageContainer">
            <div className="pageContent">
                <PageTitle showShield={false} title="Cadastro de Docente"/>
                <ProfessorRegistryForm />
            </div>
        </div>
   ) 
}



export default ProfessorRegistryPage;