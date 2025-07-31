import { PageTitle } from "@/components/PageTitle/PageTitle";
import { ProfessorRegistryForm } from "@/components/ProfessorRegistryForm/ProfessorRegistryForm";

const ProfessorRegistryPage: React.FC = () => {
   return (
     <div className="max-w-3xl mx-auto">
       <PageTitle showShield={false} title="Cadastro de Docente" />
       <ProfessorRegistryForm />
     </div>
   ); 
}



export default ProfessorRegistryPage;