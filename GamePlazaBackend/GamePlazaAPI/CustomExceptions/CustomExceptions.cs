namespace GamePlazaAPI.CustomExceptions
{
    public class EntityNotFoundException<T> : Exception
    {
        public EntityNotFoundException(object id)
            : base($"{typeof(T).Name} with id {id} was not found.")
        {
        }
    }
    
    public class EntitiesNotFoundException : Exception
    {
        public EntitiesNotFoundException(params object[] ids)
            : base($"Entities with ids {string.Join(", ", ids)} were not found.")
        {
        }
    }


    public class EntityAlreadyExistsException<T> : Exception
    {
        public EntityAlreadyExistsException(object id)
            : base($"{typeof(T).Name} with id {id} already exists.")
        {
        }
    }
}