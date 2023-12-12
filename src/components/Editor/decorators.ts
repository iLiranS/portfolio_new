import {  findLinkEntities, Link } from "./Entities/Link";
import {  findImageEntities, Img } from './Entities/Image';
import { CompositeDecorator } from "draft-js";
import { Divider, findDividerEntities } from "./Entities/Divider";




export const combinedDecorator = new CompositeDecorator([
    {
        strategy:findImageEntities,
        component:Img
    },
    {
        strategy:findLinkEntities,
        component:Link
    },
    {
        strategy:findDividerEntities,
        component:Divider
    }
]);
