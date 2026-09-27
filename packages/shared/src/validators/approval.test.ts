import { describe, expect, it } from "vitest";
import {
  addApprovalCommentSchema,
  requestApprovalRevisionSchema,
  resolveApprovalSchema,
} from "./approval.js";

describe("approval validators", () => {
  it("passes real line breaks through unchanged", () => {
    expect(addApprovalCommentSchema.parse({ body: "Looks good\n\nApproved." }).body)
      .toBe("Looks good\n\nApproved.");
    expect(resolveApprovalSchema.parse({ decisionNote: "Decision\n\nApproved." }).decisionNote)
      .toBe("Decision\n\nApproved.");
  });

  it("accepts null and omitted optional decision notes", () => {
    expect(resolveApprovalSchema.parse({ decisionNote: null }).decisionNote).toBeNull();
    expect(resolveApprovalSchema.parse({}).decisionNote).toBeUndefined();
    expect(requestApprovalRevisionSchema.parse({ decisionNote: null }).decisionNote).toBeNull();
    expect(requestApprovalRevisionSchema.parse({}).decisionNote).toBeUndefined();
  });

  it("preserves literal escape sequences in approval comments and decision notes", () => {
    const comment = String.raw`Looks good\n\nApproved.\t\r`;
    const decisionNote = String.raw`Decision\n\nApproved.\t\r`;
    const revisionNote = String.raw`Decision\r\nRevise.\t`;
    expect(addApprovalCommentSchema.parse({ body: comment }).body).toBe(comment);
    expect(resolveApprovalSchema.parse({ decisionNote }).decisionNote).toBe(decisionNote);
    expect(requestApprovalRevisionSchema.parse({ decisionNote: revisionNote }).decisionNote).toBe(revisionNote);
  });
});
