import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class VisualSettings extends DataViewObjectsParser {
    rcv_script: rcv_scriptSettings;
    settings: CorrPlotSettings;
}
export declare class CorrPlotSettings {
    method: string;
}
export declare class rcv_scriptSettings {
    provider: any;
    source: any;
}
