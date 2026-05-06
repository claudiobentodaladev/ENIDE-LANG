import { DocStructure } from "../grammar.interface.js";

export interface accessModifiers {
  __public: DocStructure;
  __private: DocStructure;
  __protected: DocStructure;
  __static: DocStructure;
  __readonly: DocStructure;
}
