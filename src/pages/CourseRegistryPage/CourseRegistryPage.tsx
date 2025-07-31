import { CourseRegistryForm } from "@/components/CourseRegistryForm/CourseRegistryForm";
import { PageTitle } from "@/components/PageTitle/PageTitle";

const CourseRegistryPage: React.FC = () => {
   return (
     <div className="max-w-3xl mx-auto">
       <PageTitle showShield={true} title="Cadastro de Linha de Pesquisa" />
       <CourseRegistryForm />
     </div>
   ); 
}



export default CourseRegistryPage;