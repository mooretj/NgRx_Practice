import {Injectable} from "@angular/core";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CoursesState, selectAll} from "./reducers/course.reducer";
import * as fromCourses from "./reducers/course.reducer";

export const selectCoursesState = createFeatureSelector<CoursesState>("courses");

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCourses.selectAll);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === "BEGINNER")
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === "ADVANCED")
);

export const selectPromoTotal = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.promo).length
);

export const areCoursesLoaded = createSelector(
  selectCoursesState,
  state => state.allCoursesLoaded
)
