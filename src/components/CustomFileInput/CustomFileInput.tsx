import styles from "./CustomFileInput.module.css";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { File } from "lucide-react"

export function CustomFileInput() {
  const { getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {'application/pdf': ['.pdf']}
  });

  return (
    <div className={styles.inputContainer}>
      <div
        {...getRootProps({
          className: cn(
            "flex cursor-pointer flex-col items-center justify-center border-2 border-dashed p-10",
            isDragActive ? "border-primary bg-primary/10" : "border-border"
          ),
        })}
      >
        <input {...getInputProps()} />
        <div className={styles.circle}>
          <File color="#ffffff"/>
        </div>
        <h3 className={styles.title}>Buscar Arquivos</h3>
        <p className={styles.subTitle}>Arraste aqui ou clique para fazer o upload</p>
      </div>
    </div>
  );
}
