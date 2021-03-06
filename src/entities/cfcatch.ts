import { CompletionEntry } from "../features/completionItemProvider";

export interface CfcatchPropertyDetails extends CompletionEntry { }

export interface CfcatchProperties {
  [propertyName: string]: CfcatchPropertyDetails;
}

export const cfcatchProperties: CfcatchProperties = {
  "type": {
    detail: "cfcatch.type",
    description: "Type: Exception type, as specified in cfcatch."
  },
  "message": {
    detail: "cfcatch.message",
    description: "Message: Exception’s diagnostic message, if provided; otherwise, an empty string; in the cfcatch.message variable."
  },
  "detail": {
    detail: "cfcatch.detail",
    description: "Detailed message from the CFML interpreter or specified in a cfthrow tag. When the exception is generated by ColdFusion (and not cfthrow), the message can contain HTML formatting and can help determine which tag threw the exception."
  },
  "tagContext": {
    detail: "cfcatch.tagContext",
    description: "An array of tag context structures, each representing one level of the active tag context at the time of the exception."
  },
  "nativeErrorCode": {
    detail: "cfcatch.nativeErrorCode",
    description: "Applies to type=\"database\". Native error code associated with exception. Database drivers typically provide error codes to diagnose failing database operations. Default value is -1."
  },
  "sqlState": {
    detail: "cfcatch.sqlState",
    description: "Applies to type=\"database\". SQLState associated with exception. Database drivers typically provide error codes to help diagnose failing database operations. Default value is -1."
  },
  "sql": {
    detail: "cfcatch.sql",
    description: "Applies to type=\"database\". The SQL statement sent to the data source."
  },
  "queryError": {
    detail: "cfcatch.queryError",
    description: "Applies to type=\"database\". The error message as reported by the database driver."
  },
  "where": {
    detail: "cfcatch.where",
    description: "Applies to type=\"database\". If the query uses the cfqueryparam tag, query parameter name-value pairs."
  },
  "errNumber": {
    detail: "cfcatch.errNumber",
    description: "Applies to type=\"expression\". Internal expression error number."
  },
  "missingFileName": {
    detail: "cfcatch.missingFileName",
    description: "Applies to type=\"missingInclude\". Name of file that could not be included."
  },
  "lockName": {
    detail: "cfcatch.lockName",
    description: "Applies to type=\"lock\". Name of affected lock (if the lock is unnamed, the value is \"anonymous\")."
  },
  "lockOperation": {
    detail: "cfcatch.lockOperation",
    description: "Applies to type=\"lock\". Operation that failed (Timeout, Create Mutex, or Unknown)."
  },
  "errorCode": {
    detail: "cfcatch.errorCode",
    description: "Applies to type=\"custom\". String error code."
  },
  "extendedInfo": {
    detail: "cfcatch.extendedInfo",
    description: "Applies to type=\"application\" and \"custom\". Custom error message; information that the default exception handler does not display."
  },
};

export const cfcatchPropertyPrefixPattern: RegExp = /\bcfcatch\s*(?:\.\s*|\[\s*['"])$/;
