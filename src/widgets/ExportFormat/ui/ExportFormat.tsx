import { classNames } from "@/shared/lib";
import * as styles from "./ExportFormat.module.scss";

export enum EExportFormat {
  PDF = "pdf",
  CSV = "csv",
  XLSX = "xlsx"
}

interface ExportFormatProps {
  className?: string;
  onClick?: (format: EExportFormat) => void;
}

export const ExportFormat = (props: ExportFormatProps) => {
  const {
    className,
    onClick,
  } = props;

  const onClickHandler = (format: EExportFormat) => {
    if (onClick) onClick(format);
  }

  const renderItems = () => {
    return Object.keys(EExportFormat).map((format: string) => {
      return(
        <div 
          className={styles.item}
          onClick={() => onClickHandler(EExportFormat[format as keyof typeof EExportFormat])}>
          { format }
        </div>
      )
    })
  }

  return(
    <div className={classNames(styles.ExportFormat, {}, [className])}>
      { renderItems() }
    </div>
  )
}
