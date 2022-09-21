/** A set of `PropertyDescriptors` of keys in `T`. */
export type AssignPropertyDescriptor<T> = {
    [K in keyof T]?: PropertyDescriptor;
}

/**
 * Type-safe wrapper around `Object.assign(this, initializer)` and
 * `Object.defineProperty()` in a class constructor with defaults.
 *
 * @param defaults Default values to be applied to `initializer`.
 * @param propertyDescriptors Getters and Setters to add to this class.
 * @returns A class with the specified fields.
 *
 * @example
 *
 * ```ts
 * interface IFoo { ... }
 * 
 * const defaults: IFoo = { ... };
 *
 * class Foo extends AssignConstructor<IFoo>(defaults) { ... }
 * ```
 *
 * @see https://stackoverflow.com/a/64268823/10292952
 */
export function AssignConstructor<T>(defaults: T, propertyDescriptors?: AssignPropertyDescriptor<T>)
{
    return class {
        constructor(initializer: Partial<T>) {
            // Assign getters and setters
            for(const property in propertyDescriptors)
            {
                const propertyDescriptor = propertyDescriptors[property];

                if(!propertyDescriptor)
                    continue;

                Object.defineProperty(this, property, propertyDescriptor)
            }

            // Assign initial or default values, using provided setters if applicable
            Object.assign(this, defaults, initializer);
        }
    } as { new(initializer: Partial<T>): T };
}

export default AssignConstructor;
