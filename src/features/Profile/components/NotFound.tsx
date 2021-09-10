import PageStatus from "@/components/PageStatus";
import { XIcon } from "@heroicons/react/outline";
import React from "react";
import styles from "../Profile.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <PageStatus
        title="User Not Found"
        icon={<XIcon strokeWidth="1" className="w-12" />}
      />
    </div>
  );
}
