import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var rVisualSample118F63583603487791208F4FB8B1D475_DEBUG: IVisualPlugin = {
    name: 'rVisualSample118F63583603487791208F4FB8B1D475_DEBUG',
    displayName: 'rVisualSample',
    class: 'Visual',
    apiVersion: '3.8.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["rVisualSample118F63583603487791208F4FB8B1D475_DEBUG"] = rVisualSample118F63583603487791208F4FB8B1D475_DEBUG;
}
export default rVisualSample118F63583603487791208F4FB8B1D475_DEBUG;