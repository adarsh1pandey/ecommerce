if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/adarsh/.gradle/caches/transforms-3/647ee194c5183dacc8f16a24db25d45b/transformed/jetified-hermes-android-0.71.2-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/adarsh/.gradle/caches/transforms-3/647ee194c5183dacc8f16a24db25d45b/transformed/jetified-hermes-android-0.71.2-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

