import styles from "./CustomFileInput.module.css";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { File, XIcon } from "lucide-react"
import { useCallback, useState } from "react";

type CustomFileInputProps = {
  onChange?: (files: File[]) => void;
  value?: File[];
};

export function CustomFileInput(
  { onChange }: CustomFileInputProps
) {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = [...files, ...acceptedFiles];
      setFiles(newFiles);
      onChange?.(newFiles);
    },
    [files, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    onDrop,
  });


  const handleRemoveFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onChange?.(newFiles);
  };
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
      {files.length > 0 && (
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-2 rounded relative"
            >
              <span className="truncate max-w-[80%]">{file.name}</span>
              <span className="text-xs text-gray-500 mx-2">{(file.size / 1024).toFixed(1)} KB</span>
              <button
                type="button"
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemoveFile(index)}
              >
                <XIcon size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
