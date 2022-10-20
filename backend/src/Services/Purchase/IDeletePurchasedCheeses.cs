using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Services.Purchase
{
    public interface IDeletePurchasedCheeses
    {
        void DeletePurchasedCheeses(int cheeseId);
    }
}
