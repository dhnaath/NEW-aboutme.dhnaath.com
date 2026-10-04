// TODO: isi data MBTI kamu di sini.
// Catatan: saat ini `mbtiData` di-import oleh PersonalityTraitsApp.tsx
// tapi belum benar-benar dipakai di render (kontennya masih hardcode
// langsung di file itu). Setelah data ini diisi, sambungkan ke JSX
// yang relevan di PersonalityTraitsApp.tsx.

export interface MbtiTrait {
  title: string;
  description: string;
}

export interface MbtiData {
  type: string; // contoh: "INTJ"
  nickname: string; // contoh: "The Architect"
  summary: string;
  strengths: MbtiTrait[];
  weaknesses: MbtiTrait[];
}

export const mbtiData: MbtiData = {
  type: "",
  nickname: "",
  summary: "",
  strengths: [],
  weaknesses: [],
};
