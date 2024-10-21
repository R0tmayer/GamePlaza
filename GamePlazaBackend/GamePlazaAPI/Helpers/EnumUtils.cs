namespace GamePlazaAPI.Helpers;

public static class EnumUtils
{
    public static IEnumerable<object> GetEnumValues<T>() where T : Enum
    {
        return Enum.GetValues(typeof(T))
            .Cast<T>()
            .Select((value, index) => new { Id = index, Value = value.ToString() });
    }
}


