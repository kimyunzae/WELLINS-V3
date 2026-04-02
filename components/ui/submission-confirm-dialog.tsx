"use client";

import type { ReactNode } from "react";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SubmissionConfirmField = {
  label: string;
  value?: ReactNode;
  fullWidth?: boolean;
};

// comfirm dialog에 보여질 필드 타입 및 정보 
type SubmissionConfirmDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isSubmitting?: boolean; 
  title: string; // dialog의 제목
  description: string; // dialog의 설명
  fields?: SubmissionConfirmField[]; // dialog에 보여질 필드 정보 배열
  notice?: ReactNode; // dialog 하단에 보여질 추가적인 공지사항이나 안내문
  cancelLabel?: string; // 취소 버튼의 라벨, 기본값은 Back
  confirmLabel?: string; // 확인 버튼의 라벨, 기본값은 Confirm
  submittingLabel?: string; // 제출 중일 때 확인 버튼에 보여질 라벨 기본값은 Sending...
  onConfirm: () => void; // 확인 버튼 클릭 시 실행될 콜백 함수
};


function hasDisplayValue(value: ReactNode | undefined) {
  // null, undefined, false는 화면에 표시할 값이 없는 것으로 간주
  if (value === null || value === undefined || value === false) {
    return false;
  }
  // 문자열인 경우, 공백만 있는 문자열은 표시할 값이 없는 것으로 간주
  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  return true;
}


export function SubmissionConfirmDialog({
  open,
  onOpenChange,
  isSubmitting = false,
  title,
  description,
  fields = [],
  notice,
  cancelLabel = "Back",
  confirmLabel = "Confirm",
  submittingLabel = "Sending...",
  onConfirm,
}: SubmissionConfirmDialogProps) {
  const visibleFields = fields.filter((field) => hasDisplayValue(field.value));

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !isSubmitting && onOpenChange(nextOpen)}>
      <DialogContent className="flex max-w-[34rem] items-center justify-center border-none bg-transparent p-4 shadow-none">
        <Card className="w-full gap-0 overflow-hidden rounded-2xl border-[#D8DEE6] bg-white p-0 py-0 shadow-2xl">
          <div className="max-h-[90vh] overflow-y-auto pr-0.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#B8C2CF] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5">
            <CardHeader className="gap-2 border-b border-[#F3F4F6] bg-[#F9FAFB] py-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-[#1C2746]">
                  {title}
                </DialogTitle>
                <DialogDescription className="text-sm text-[#6B7280]">
                  {description}
                </DialogDescription>
              </DialogHeader>
            </CardHeader>

            <CardContent className="space-y-6 py-6">
              {visibleFields.length > 0 ? (
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                  {visibleFields.map((field) => (
                    <div
                      key={field.label}
                      className={field.fullWidth ? "col-span-2 space-y-1" : "space-y-1"}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9AA4B2]">
                        {field.label}
                      </span>
                      <p className="font-medium text-[#1F2937]">{field.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {notice ? (
                <div
                  className={
                    visibleFields.length > 0
                      ? "border-t border-[#E5E7EB] pt-5 text-sm leading-relaxed text-[#475467]"
                      : "text-sm leading-relaxed text-[#475467]"
                  }
                >
                  {notice}
                </div>
              ) : null}
            </CardContent>

            <CardFooter className="flex flex-col-reverse gap-3 border-t border-[#F3F4F6] bg-[#F9FAFB] px-6 py-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-flex w-full justify-center rounded-md border border-[#D8DEE6] bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#1C2746] transition-all hover:bg-[#F1F5F9] sm:w-auto"
              >
                {cancelLabel}
              </button>
              <button
                type="button"
                onClick={onConfirm}
                disabled={isSubmitting}
                className="inline-flex w-full justify-center rounded-md bg-[#1C2746] px-8 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#2B6FD6] hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? submittingLabel : confirmLabel}
              </button>
            </CardFooter>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
