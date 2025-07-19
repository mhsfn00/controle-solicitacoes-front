import { CourseRegistryForm } from "@/components/CourseRegistryForm/CourseRegistryForm";
import { PageTitle } from "@/components/PageTitle/PageTitle";

const CourseRegistryPage: React.FC = () => {
   return (

        <div className="pageContainer">
            <div className="pageContent">
                <PageTitle title="Cadastro de Linha de Pesquisa"/>
                <CourseRegistryForm/>
            </div>
        </div>
   ) 
}



export default CourseRegistryPage;