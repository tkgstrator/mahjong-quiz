import { Transform } from "class-transformer";

export enum PI {
  M1 = 'q',
  M2 = 'w',
  M3 = 'e',
  M4 = 'r',
  M5 = 't',
  M6 = 'y',
  M7 = 'u',
  M8 = 'i',
  M9 = 'o',
  S1 = 'a',
  S2 = 's',
  S3 = 'd',
  S4 = 'f',
  S5 = 'g',
  S6 = 'h',
  S7 = 'j',
  S8 = 'k',
  S9 = 'l',
  P1 = 'z',
  P2 = 'x',
  P3 = 'c',
  P4 = 'v',
  P5 = 'b',
  P6 = 'n',
  P7 = 'm',
  P8 = ',',
  P9 = '.',
  DO = '1',
  NA = '2',
  XI = '3',
  BE = '4',
  BA = '5',
  ZH = '6',
  FA = '7'
}

export class MProblem {
  @Transform(({ value }) => [...value].map((v) => Object.values(PI).find((p) => p === v)))
  readonly pieces: PI[];

  @Transform(({ value }) => Object.values(PI).find((p) => p === value))
  readonly dora: PI;

  @Transform(({ value }) => Object.values(PI).find((p) => p === value))
  readonly answer: PI;
}
