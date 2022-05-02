import InputText from "./InputText";
import InputSelect from "./InputSelect";
import InputRadio from "./InputRadio";
import InputMap from "./InputMap";
import InputGeoLoc from "./InputGeoLoc";
import InputFile from "./InputFile";

const componentList = {
  InputText: InputText,
  InputRadio: InputRadio,
  InputSelect: InputSelect,
  InputMap: InputMap,
  InputGeoLoc: InputGeoLoc,
  InputFile: InputFile,
};

const FormFactory = ({ elementos }) => {
  return (
    <>
      {elementos.map((e, i) => {
        const ComponentToRender = componentList[e.type];
        return ComponentToRender ? (
          <ComponentToRender {...e} key={e.name} />
        ) : null;
      })}
    </>
  );
};

export default FormFactory;
