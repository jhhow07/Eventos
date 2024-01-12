using ProEventos.Domain;

namespace Back.src.ProEventos.Application.Contratos
{
    public interface IPalestranteService
    {
        Task<Evento> AddPalestrante(Palestrante model);
        Task<Evento> UpdatePalestrante(int palestranteId, Palestrante model);
        Task<bool> DeletePalestrante(int palestranteId);
        Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos = false);
        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos = false);
        Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEventos = false);
    }
}